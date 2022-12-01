/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';
import './Table.css';
import CustomIcons from '../../utils/Icons';
import Typography from '../Typography';
import images from '../../utils/Images/No.png';
import SearchBar from '../Search';
/**
 *
 * @param  {object} props - required props in table component
 * @returns {React.ReactElement} - returns the Table component
 */
const Table = (props) => {
  const {
    rows,
    onClickPageBtn,
    header,
    mode,
    onClickPerPage,
    currentPage,
    currentLimit,
    type,
    onEditData,
    onDeleteData,
    optional,
    edit,
    deleteData,
    hideKeyFields,
    showSno,
    onRowClicks,
    navLink,
    dropdown,
    pendingStatus,
    approvedStatus,
    rejectedStatus,
    // editableTableData,
  } = props;
  const [page, setPage] = React.useState(0);
  const [rowData, setRowData] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [datavalues, setDatavalues] = React.useState();
  // eslint-disable-next-line no-unused-vars
  const [editDataCellView, setEditDataCellView] = React.useState(false);
  // console.log(values, 'jjuujegtyy');
  /**
   *
   * @param {*} objValues
   */
  const onRowClick = (objValues) => {
    onRowClicks(objValues.sno);
  };
  /**
   * @name getColorType
   * @param {*} colorType -  background color
   * @returns {React.ReactElement} -  returns the background color
   */

  /**
   * @function descendingComparator used for descendingComparator action
   * @param {string} a input value
   * @param {string} b input value
   * @param {string} orderBy input value
   * @returns {string} value
   */
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  /**
   * @function getComparator used for descendingComparator action
   * @param {string} order input value
   * @param {string} orderBy input value
   * @returns {string} value
   */
  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  /**
   * @function stableSort used for descendingComparator action
   * @param {string} array input value
   * @param {string} comparator input value
   * @returns {string} value
   */
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  /**
   *
   * @param {*} eventValue - onchange event
   */
  const handleChangePage = (eventValue) => {
    setPage(eventValue - 1);
  };
  /**
   *
   * @param {*} eventValue - onchange event
   */
  const handleChangeRowsPerPage = (eventValue) => {
    // eslint-disable-next-line radix
    setRowsPerPage(parseInt(eventValue));
    setPage(0);
  };

  useEffect(() => {
    setRowData(rows || '');
  }, [rows]);

  /**
   *
   * @param {*} data table data
   * @returns {boolean} false when data contains only letters and whitespace
   */
  const isString = (data) => {
    return !/[a-zA-Z]/g.test(data);
  };

  /**
   * @param {event} e event object on changing search bar
   */
  const onSearch = (e) => {
    const filters = [];
    if (e.target.value) {
      rows.forEach((item) => {
        const keys = Object.keys(item);
        for (let i = 0; i <= keys.length; i += 1) {
          if (
            item[keys[i]] &&
            item[keys[i]] !== null &&
            item[keys[i]].toString().toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            filters.push(item);
          }
        }
      });
      setRowData(filters);
    } else {
      setRowData(rows);
    }
  };
  return (
    <Grid>
      <Grid className="tableGrid">
        <Grid md={12} className="searchGrid">
          <SearchBar handleChange={(e) => onSearch(e)} handleClear={() => setRowData(rows)} showInput={true} />
        </Grid>
        <div style={{ overflowX: 'auto', height: '250px' }}>
          <table className="tables">
            <thead className="thead">
              {type === 'tableHeader' ? (
                <tr className="mdaHeader">
                  {header.map((val, index) => {
                    return (
                      <th
                        colSpan={header.length === index + 1 ? 4 : ''}
                        className={header.length === index + 1 ? 'lastMdaHeader' : 'thData'}
                      >
                        {header.length === index + 1
                          ? val.data.map((item, id) => {
                              return (
                                <>
                                  {id === 0 && val.name}
                                  <th className="thData">{item}</th>
                                </>
                              );
                            })
                          : val.name}
                      </th>
                    );
                  })}
                </tr>
              ) : (
                <tr>
                  {header.map((value) => {
                    return !hideKeyFields?.includes(value) && <th className="thData">{value}</th>;
                  })}
                </tr>
              )}
            </thead>
            <tbody>
              {mode === 'tableDataValue' && rowData.length > 0 ? (
                stableSort(rowData, getComparator())
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((objValues, index) => {
                    // arr.push(objValues)
                    // console.log(setDatavalues, '  ');
                    return (
                      <tr onClick={() => onRowClick(objValues)}>
                        {Object.entries(
                          showSno
                            ? {
                                id: rowsPerPage * (page + 1) - (rowsPerPage - (index + 1)),
                                ...objValues,
                              }
                            : objValues,
                          // eslint-disable-next-line no-unused-vars
                        ).map(([key, value]) => {
                          return (
                            <td className={`${isString(value) && 'tdDataNumber'} tdData`}>
                              <NavLink to={navLink} style={{ textDecoration: 'none', color: '#204768' }}>
                                {value}
                              </NavLink>
                            </td>
                          );
                        })}
                        {optional && (
                          <td className="optionalIcons">
                            {pendingStatus && (
                              <Typography
                                text="Pending"
                                type="link"
                                customStyle={{ fontSize: '13px', color: '#FFC226' }}
                              />
                            )}
                            {approvedStatus && (
                              <Typography
                                text="Approved"
                                type="link"
                                customStyle={{ fontSize: '13px', color: '#01BF38' }}
                              />
                            )}
                            {rejectedStatus && (
                              <Typography
                                text="Rejected"
                                type="link"
                                customStyle={{ fontSize: '13px', color: '#FF6060' }}
                              />
                            )}
                            {edit && (
                              <img
                                src={CustomIcons.EditIcon}
                                className="iconStyle"
                                alt="edit"
                                onClick={() => onEditData(objValues)}
                                aria-hidden="true"
                              />
                            )}
                            {deleteData && (
                              <img
                                src={CustomIcons.DeleteIcon}
                                alt="delete"
                                onClick={() => onDeleteData(objValues)}
                                aria-hidden="true"
                                className="iconStyle"
                              />
                            )}
                            {dropdown && (
                              <select name="cars" id="cars">
                                <option value="pending">pending</option>
                                <option value="confirm">confirm</option>
                              </select>
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  })
              ) : (
                <tr>
                  <td className="tdData" colSpan={10}>
                    <div className="emptyDataDiv">
                      <img src={images} alt="emptyData" className="emptyData" />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Grid>

      <Grid className="pagination">
        <Pagination
          onClickPageBtn={mode === 'tableDataValue' ? handleChangePage : onClickPageBtn}
          totalPages={5}
          currentPage={mode === 'tableDataValue' ? parseInt(page + 1, 10) : currentPage || 1}
          onClickPerPage={mode === 'tableDataValue' ? handleChangeRowsPerPage : onClickPerPage}
          currentLimit={mode === 'tableDataValue' ? rowsPerPage : currentLimit}
          rows={rowData}
          className="pagination"
          recordLength={rowData?.length}
        />
      </Grid>
    </Grid>
  );
};

export default Table;
Table.propTypes = {
  header: PropTypes.arrayOf.isRequired,
  onClickPageBtn: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  mode: PropTypes.string,
  onClickPerPage: PropTypes.func,
  currentPage: PropTypes.number,
  type: PropTypes.string,
  currentLimit: PropTypes.number,
  onEditData: PropTypes.func,
  dropdown: PropTypes.bool,
  onDeleteData: PropTypes.func,
  optional: PropTypes.bool,
  edit: PropTypes.bool,
  deleteData: PropTypes.bool,
  hideKeyFields: PropTypes.arrayOf(),
  showSno: PropTypes.bool,
  onRowClicks: PropTypes.func,
  navLink: PropTypes.string,
  pendingStatus: PropTypes.bool,
  approvedStatus: PropTypes.bool,
  rejectedStatus: PropTypes.bool,
};
Table.defaultProps = {
  mode: 'tableDataValue',
  onClickPerPage: () => {},
  type: 'normal',
  currentPage: 1,
  currentLimit: 5,
  onEditData: () => null,
  onDeleteData: () => null,
  optional: false,
  edit: false,
  deleteData: false,
  dropdown: false,

  hideKeyFields: [],
  showSno: false,
  onRowClicks: () => null,
  navLink: '',
  pendingStatus: false,
  approvedStatus: false,
  rejectedStatus: false,
};
