import { Inter } from "next/font/google";
import { JSONSchema7 } from "json-schema";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import schema from "@/types/User/schema.json";

const inter = Inter({ subsets: ["latin"] });

//const convertedSchema: JSONSchema7 = JSON.parse(schema);

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Form
        schema={schema as JSONSchema7}
        validator={validator}
        onSubmit={(form) => console.log(form.formData)}
      />
    </main>
  );
}
