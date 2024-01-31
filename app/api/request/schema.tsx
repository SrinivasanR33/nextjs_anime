import { z } from "zod";

const schema = z.object({
    requestMessage: z.string({
        required_error: "Name is Required",
        invalid_type_error: "Name is not String",
    }),
    userInfo: z.object({}),
    isActive: z.boolean({ required_error: "Active is Required" }),
});

export default schema;
