export interface IJobListState {
  isLoading: boolean,
  jobs: IJob[],
  totalJobs: number,
  numOfPages: number,
  page: number,
  stats: IDefaultJobStats | {};
  monthlyApplications: IMonthlyApplicaiton[],
  filterState: IJobFilterState,
};

export interface IJob {
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

export interface IJobState {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'];
  jobType: 'full-time' | 'part-time' | 'remote' | 'internship';
  statusOptions: ['interview', 'declined', 'pending'];
  status: 'interview' | 'declined' | 'pending',
  isEditing: boolean;
  editJobId: string;
}

export interface IDefaultJobStats {
  pending: number,
  interview: number,
  declined: number;
}

export interface IMonthlyApplicaiton {
  date: string;
  count: number;
}

export interface IJobFilterState {
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}
