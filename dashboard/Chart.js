const {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  Link,
  MenuIcon,
  ChevronLeftIcon,
  NotificationsIcon,
  makeStyles,
  mainListItems,
  secondaryListItems,
  useTheme,
} = MaterialUI;

const {
  useState,
} = React;

const { 
  LineChart, 
  Line,
  XAxis, 
  YAxis, 
  Label,
  ResponsiveContainer,
} = Recharts;

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

