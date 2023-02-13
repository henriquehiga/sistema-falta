export type HttpRequest = {
  body?: any;
  params?: {
    [key: string]: string;
  };
};

export type HttpResponse = {
  body: any;
  statusCode: number;
};
