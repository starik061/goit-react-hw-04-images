import React, { useEffect, useState } from 'react';
import { AppStyle } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImagesByQuery } from './imageAPI/api';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [imagesData, setImagesData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    if (!searchQuery) return;

    console.log(totalHits);

    const fetchData = async () => {
      if (page === 1) {
        setLoaderVisible(true);
        setIsFound(true);

        const { totalHits, hits } = await getImagesByQuery(searchQuery, page);

        setTimeout(() => {
          setImagesData(hits);
          setTotalHits(totalHits);
          setLoadMoreVisible(totalHits > 12 ? true : false);
          setLoaderVisible(false);
          setIsFound(!!hits.length);
        }, 600);
      }

      if (page !== 1) {
        setLoaderVisible(true);

        const { totalHits, hits } = await getImagesByQuery(searchQuery, page);

        setTimeout(() => {
          setImagesData(prevImagesData => [...prevImagesData, ...hits]);
          setTotalHits(totalHits);
          setLoadMoreVisible(page < Math.ceil(totalHits / 12) ? true : false);
          setLoaderVisible(false);
        }, 600);
      }
    };

    fetchData();
  }, [page, searchQuery, totalHits]);

  const handleSearchSubmit = search => {
    if (search !== searchQuery) {
      setSearchQuery(search);
      setImagesData([]);
      setTotalHits(0);
      setLoadMoreVisible(false);
      setPage(1);
    }
  };

  const loadMoreImages = () => {
    setPage(page + 1);
  };

  return (
    <AppStyle>
      <Searchbar onSearchSubmit={handleSearchSubmit} />
      {isFound ? (
        <ImageGallery galleryImages={imagesData} />
      ) : (
        <div style={{ margin: '0 auto' }}>
          <p>Nothing found</p>
        </div>
      )}

      {loaderVisible && (
        <div style={{ margin: '0 auto' }}>
          <Loader />
        </div>
      )}
      {loadMoreVisible && (
        <div style={{ margin: '0 auto' }}>
          <LoadMoreButton onLoadMoreBtnClick={loadMoreImages} />
        </div>
      )}
    </AppStyle>
  );
};
