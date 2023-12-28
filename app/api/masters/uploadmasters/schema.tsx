import { z } from "zod"

const schema = z.object({
    name: z.string({ required_error: 'Name is Required', invalid_type_error: 'Name is not String' }),
    codeName: z.string({ required_error: 'Code name is required', invalid_type_error: "Code name is not string" }),
    uploadId: z.string({ required_error: 'UploadId is Required', invalid_type_error: 'uploadId is not String' }),
    isActive: z.boolean({ required_error: 'Active is Required' }),
})

export default schema