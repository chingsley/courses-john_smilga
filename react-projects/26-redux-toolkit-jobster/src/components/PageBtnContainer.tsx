import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/allJobs/allJobsSlice';
import { PageBtnContainerWrapper } from '../assets/wrappers';
import { AppDispatch, RootState } from '../app/store';

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store: RootState) => store.allJobs);
  const dispatch: AppDispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <PageBtnContainerWrapper>
      <button className="prev-btn" type="button" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              key={pageNumber}
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" type="button" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </PageBtnContainerWrapper>
  );
};

export default PageBtnContainer;