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
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const TracksTitle = () => {
  const record = useRecordContext();
  return <span>Tracks {record ? `"${ record.id }"` : ""}</span>;
};

export const TracksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="trackName" />
<TextField source="duration" />
<TextField source="album" />
<TextField source="lyrics" />
<TextField source="rating" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const TracksEdit = () => (
                    <Edit title={<TracksTitle />}>
                      <SimpleForm>
                          <TextInput source="trackName"   />
<TextInput source="duration"   />
<TextInput source="album"   />
<TextInput source="lyrics"   />
<TextInput source="rating"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const TracksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="trackName"   />
<TextInput source="duration"   />
<TextInput source="album"   />
<TextInput source="lyrics"   />
<TextInput source="rating"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,
,

    ];


