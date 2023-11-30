import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        // "typescript-react-apollo",
      ],
      config: {
        documentMode: "documentNodeImportFragments",
      },
    },
  },
};

export default config;
