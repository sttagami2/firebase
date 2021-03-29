import React, {FC, useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import background from "../../assets/images/background.jpg";
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      height: '100vh',
    },

    paper: {
      position: 'relative',
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "45%", 
    }
  }),
)

const TopMain: FC = () => {
  const classes = useStyle();
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/search/" + keyword);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }

  return(
    <div className={classes.background}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase 
          placeholder="無料素材を検索"
          onChange={handleChange}
        />
      </Paper>
    </div>
  )
}

export default TopMain;