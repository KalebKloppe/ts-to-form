const tsj = require("ts-json-schema-generator");
const fs = require("fs");
const path = require("path");

// Get all the files in the types directory
const getFiles = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir);

  files.forEach((file: string) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      if (path.basename(file) === "index.ts") {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
};

const generateSchema = (file: string) => {
  // Extract the parent folder name
  const parentFolderName = path.basename(path.dirname(file));

  const config = {
    path: file,
    tsconfig: "./tsconfig.json",
    type: parentFolderName,
  };

  const schemaGenerator = tsj.createGenerator(config);
  const schema = schemaGenerator.createSchema(config.type);

  const schemaString = JSON.stringify(schema, null, 2);
  const schemaPath = path.join(path.dirname(file), "schema.json");

  fs.writeFileSync(schemaPath, schemaString, "utf8");
};

const indexFiles = getFiles("./types");
indexFiles.forEach((file) => generateSchema(file));
