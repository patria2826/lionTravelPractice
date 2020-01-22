export interface IAction {
  type: string;
  payload?: any;
}

type returnThunkFC = (dispatch: any) => {};

export interface IProps {
  signedIn?: (userId: string | number) => IAction;
  signedOut?: (userId: string | number) => IAction;
  createStream?: (formValues: any) => returnThunkFC;
  fetchStreams?: () => returnThunkFC;
  fetchStream?: (id: string | number) => returnThunkFC;
  editStream?: (id: string | number, formValues: any) => returnThunkFC;
  deleteStream?: (id: number | string) => returnThunkFC;
  streams?: IStream[];
  stream?: IStream;
  isSignedIn?: boolean;
  currentUserId?: string;
}

export interface IState {
  auth: { isSignedIn: boolean; userId: string };
  form: any;
  streams: IStream[];
}

export interface IFormValues {
  title: string;
  description: string;
  userId: string | null;
}

export interface IStream extends IFormValues {
  id: number | string;
}
