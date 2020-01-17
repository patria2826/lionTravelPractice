export interface Action {
  type: string;
  payload?: any;
}

type returnThunkFC = (dispatch: any) => {};

export interface Props {
  signedIn: (userId: string | number) => Action;
  signedOut: (userId: string | number) => Action;
  createStream: (formValues: any) => returnThunkFC;
  fetchStreams: () => returnThunkFC;
  fetchStream: (id: string | number) => returnThunkFC;
  editStream: (id: string | number, formValues: any) => returnThunkFC;
  deleteStream: (id: number | string) => returnThunkFC;
  streams: Stream[];
}

export interface State {
  auth: string;
  form: any;
  streams: Stream;
}

export interface FormValues {
  title: string;
  description: string;
  userId: string | null;
}

export interface Stream extends FormValues {
  id: number | string;
}
