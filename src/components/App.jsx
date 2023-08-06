import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { feachPictures } from 'service/Api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ModalImg } from './App.styled';
import { Loader } from './Loader/Loader';
import { toast } from 'react-toastify';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    per_page: 12,
    photos: [],
    totalHits: 0,
    showloadMore: false,
    showLoader: false,
    bigImgUrl: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      try {
        const { page, per_page, searchQuery } = this.state;
        this.setState({ showLoader: true, showloadMore: false });
        const data = await feachPictures({ page, per_page, q: searchQuery });
        if (!data.totalHits) {
          toast.warn(
            'Sorry, but nothing was found for your request. Change the request and try again.'
          );
          return;
        }

        this.setState({
          photos: page === 1 ? data.hits : [...prevState.photos, ...data.hits],
          totalHits: data.totalHits,
          showloadMore:
            page === Math.ceil(data.totalHits / per_page) ? false : true,
        });
      } catch {
        toast.error('Oops!!! An error occurred. Please try again.');
        console.log('eror');
      } finally {
        this.setState({ showLoader: false });
      }
    }
  }
  handleSearchForm = query => {
    if (!query) {
      toast.warn('Please enter a request!');
      return;
    }
    if (this.state.searchQuery !== query) {
      this.setState({
        photos: [],
        searchQuery: query,
        page: 1,
      });
    }
  };
  handleLoadMore = () => {
    const { page, per_page, totalHits } = this.state;
    const maxPages = Math.ceil(totalHits / per_page);
    this.setState({
      page: page < maxPages ? page + 1 : page,
    });
  };
  handleShowBigImg = url => {
    this.setState({
      bigImgUrl: url,
    });
  };
  closeModal = () => {
    this.setState({ bigImgUrl: '' });
  };

  render() {
    const { showLoader, showloadMore, bigImgUrl, searchQuery, photos } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGallery photos={photos} onShowBigImg={this.handleShowBigImg} />
        {showLoader && <Loader />}
        {showloadMore && <Button onLoadMore={this.handleLoadMore} />}
        {bigImgUrl && (
          <Modal closeImgModal={this.closeModal}>
            <ModalImg src={bigImgUrl} alt={searchQuery} />
          </Modal>
        )}
      </>
    );
  }
}
