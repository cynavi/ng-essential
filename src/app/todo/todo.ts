export type Todo = {
  id: string;
  title: string;
  status: Status;
  details?: string;
};

export type Status = 'not started' | 'in progress' | 'completed';
