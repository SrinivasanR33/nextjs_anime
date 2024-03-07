import { URL } from "@/app/commen/CommenName";
import { setLoadingState } from "@/redux/actions/masterSlice";
import { store } from "@/redux/store/store";
import { UploadMasterType } from "@/utils/types";

export const CreateUploadMasterAPI = async (
  req?: UploadMasterType | {},
  operationType?: "post" | "put" | "delete",
  id?: string
) => {
  try {
    
    store.dispatch(setLoadingState(true));
  
    let method: string = "GET"; // Default to GET
    let body: string | undefined;
  
    if (operationType === "post" || operationType === "put") {
      method = operationType.toUpperCase();
      body = JSON.stringify(req);
    } else if (operationType === "delete") {
      method = "DELETE";
    }
  
    const masterData = await fetch(
      `${URL}/masters/uploadmasters${id ? `/${id}` : ""}`,
      {
        cache: "no-store",
        method,
        body,
      }
    );
  
    store.dispatch(setLoadingState(false));
    return masterData.json();
  } catch (error) {
    
  }
};
