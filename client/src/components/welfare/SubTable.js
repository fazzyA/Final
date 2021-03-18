import React from 'react'
import MaterialTable from 'material-table'
import FormDialog from '../Dialog';
import AddIcon from '@material-ui/icons/Add';
import {tableIcons} from '../tableIcons'
const Detail = () => {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'MemberName', field: 'MemberName' },
        { title: 'Relation with Patient', field: 'Relation with Patient', initialEditValue: 'initial edit value' },
        { title: 'Monthly Income', field: 'Monthly Income', type: 'numeric' },
      ]);

      const [data, setData] = useState([]);

    return (
        <div>
<MaterialTable
        title="Editable Preview"
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve()
              }, 1000)
            }),
        }}
      />
        </div>
    )
}

export default Detail

