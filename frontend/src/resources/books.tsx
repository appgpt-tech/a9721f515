// Source code generated by AppGPT (www.appgpt.tech)

 import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const booksTitle = () => {
  const record = useRecordContext();
  return <span>books {record ? `"${ record.title }"` : ""}</span>;
};

export const booksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="title" />
<ReferenceField source="author" reference="authors"  />
<TextField source="ISBN" />
<DateField source="publicationDate" />
<TextField source="genre" />
<TextField source="status" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const booksEdit = () => (
                    <Edit title={<booksTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<TextInput source="title"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="author"  reference="authors"   /></Grid>
<Grid item xs={4}>
<TextInput source="ISBN"   /></Grid>
<Grid item xs={4}>
<DateInput source="publicationDate"   /></Grid>
<Grid item xs={4}>
<TextInput source="genre"   /></Grid>
<Grid item xs={4}>
<TextInput source="status"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const booksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<TextInput source="title"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="author"  reference="authors"   /></Grid>
<Grid item xs={4}>
<TextInput source="ISBN"   /></Grid>
<Grid item xs={4}>
<DateInput source="publicationDate"   /></Grid>
<Grid item xs={4}>
<TextInput source="genre"   /></Grid>
<Grid item xs={4}>
<TextInput source="status"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="author" label="author" reference="authors"   alwaysOn/>,
,
,
,
,

    ];


