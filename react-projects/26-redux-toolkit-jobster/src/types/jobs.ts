interface IJobList {
  isLoading: boolean,
  jobs: IJob[],
  totalJobs: number,
  numOfPages: number,
  page: number,
  stats: IDefaultJobStats | {};
  monthlyApplications: IMonthlyApplicaiton[],
  filterState: IJobFilterState,
};

interface IJob {
  _id: string;
  company: string;
  position: string;
  status: string;
  jobType: string;
  jobLocation: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface IDefaultJobStats {
  pending: number,
  interview: number,
  declined: number;
}

interface IMonthlyApplicaiton {
  date: string;
  count: number;
}

interface IJobFilterState {
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}
