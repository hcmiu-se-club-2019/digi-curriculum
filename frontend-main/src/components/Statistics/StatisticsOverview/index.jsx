import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getGeneratedOverviewData } from './fakeOverviewDataGenerator';

import { ReactComponent as RoadBlockIcon } from '../../icons/roadblock.svg';

getGeneratedOverviewData();

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: 'bold',
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableCell);

class StatisticsOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMajors: {},
      allMajorIds: [],
      totalStudent: 0,
      totalLecturer: 0,
    };
  }

  componentDidMount() {
    let { allMajors, allMajorIds, totalStudent, totalLecturer } = getGeneratedOverviewData();
    this.setState({
      allMajors,
      allMajorIds,
      totalStudent,
      totalLecturer,
    });
  }

  render() {
    console.log('RENDER');
    console.log('PROPS', this.props);
    console.log('STATE', this.state);
    const { allMajors, allMajorIds, totalStudent, totalLecturer } = this.state;
    return (
      <div>
        <Box display="flex" flexDirection="flex-row" justifyContent="center" alignItems="center" textAlign="center" padding="40px 40px 20px" fontSize="24pt">
          <Box display="flex" flexDirection="column" paddingX="20px">
            <div>
              <b>Year</b>
            </div>
            <div>2020</div>
          </Box>
          <Box display="flex" flexDirection="column" paddingX="20px">
            <div>
              <b>Total students</b>
            </div>
            <div>{totalStudent}</div>
          </Box>
          <Box display="flex" flexDirection="column" paddingX="20px">
            <div>
              <b>Total lecturers</b>
            </div>
            <div>{totalLecturer}</div>
          </Box>
          <Box display="flex" flexDirection="column" paddingX="20px">
            <div>
              <b>Number of disiplines</b>
            </div>
            <div>{allMajorIds.length}</div>
          </Box>
        </Box>
        <Box padding="20px 0px 40px">
          <Grid container>
            <Grid item lg={6} style={{ padding: '0px 40px' }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="center">Number of students</StyledTableCell>
                      <StyledTableCell align="center">Number of courses</StyledTableCell>
                      <StyledTableCell align="center">Major count</StyledTableCell>
                      <StyledTableCell align="center">Highest GPA</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allMajorIds.map((majorId) => (
                      <TableRow key={majorId}>
                        <TableCell align="right" style={{ borderBottom: 'none' }}>
                          {allMajors[majorId].name}
                        </TableCell>
                        <TableCell style={{ borderBottom: 'none' }}>{allMajors[majorId].studentCount}</TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          {allMajors[majorId].courseCount}
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          {allMajors[majorId].allSubMajorIds.length}
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          {allMajors[majorId].highestGPA}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item lg={6} style={{ padding: '0px 40px' }}>
              <Box style={{ textAlign: 'center' }}>
                <h3>Information Technology</h3>
              </Box>
              <Box display="flex" justifyContent="center" paddingTop={'20px'}>
                <FormControl fullWidth variant="outlined" size={'small'} style={{ maxWidth: '400px' }}>
                  <InputLabel>Program Type</InputLabel>
                  <Select label="Program Type">
                    <MenuItem value={10}>(IU) International University</MenuItem>
                    <MenuItem value={20}>(WE) West of England University</MenuItem>
                    <MenuItem value={30}>(UN) Nottingham University</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="center">Number of students</StyledTableCell>
                        <StyledTableCell align="center">Number of courses</StyledTableCell>
                        <StyledTableCell align="center">Major count</StyledTableCell>
                        <StyledTableCell align="center">Highest GPA</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="right" style={{ borderBottom: 'none' }}>
                          Information Technology
                        </TableCell>
                        <TableCell style={{ borderBottom: 'none' }}>200</TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          34
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          3
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          96.3
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right" style={{ borderBottom: 'none' }}>
                          Information Technology
                        </TableCell>
                        <TableCell style={{ borderBottom: 'none' }}>200</TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          34
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          3
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          96.3
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right" style={{ borderBottom: 'none' }}>
                          Information Technology
                        </TableCell>
                        <TableCell style={{ borderBottom: 'none' }}>200</TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          34
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          3
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          96.3
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right" style={{ borderBottom: 'none' }}>
                          Information Technology
                        </TableCell>
                        <TableCell style={{ borderBottom: 'none' }}>200</TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          34
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          3
                        </TableCell>
                        <TableCell align="center" style={{ borderBottom: 'none' }}>
                          96.3
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default StatisticsOverview;
