import { URL } from "@/app/commen/CommenName";
import { setLoadingState } from "@/redux/actions/masterSlice";
import { store } from "@/redux/store/store";
import { RequestList } from "@/utils/types";

export const CreateUploadMasterAPI = async (
  req?: RequestList | {},
  operationType?: "post" | "put" | "delete",
  id?: string
) => {
  store.dispatch(setLoadingState(true));

  let method: string = "GET"; // Default to GET
  let body: string | undefined;

  if (operationType === "post" || operationType === "put") {
    method = operationType.toUpperCase();
    body = JSON.stringify(req);
  } else if (operationType === "delete") {
    method = "DELETE";
  }

  const requestData = await fetch(`${URL}/request${id ? `/${id}` : ""}`, {
    cache: "no-store",
    method,
    body,
  });

  store.dispatch(setLoadingState(false));
  return requestData.json();
};
