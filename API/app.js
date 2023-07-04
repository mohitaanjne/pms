import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

//to link routes at application level
import UserRouter from './routes/user.router.js';
import ProjectRouter from './routes/project.router.js';
import AssignProjectRouter from './routes/assignproject.router.js';
import GroupRouter from './routes/group.router.js';
import AssignTaskRouter from './routes/assigntask.router.js';
import TaskSubmitionRouter from './routes/tasksubmition.router.js';

//to resolve the problem of cross origin
app.use(cors());

//to extract data from request(post,get,patch,delete)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware
app.use("/user",UserRouter);
app.use("/project",ProjectRouter);
app.use("/assignproject",AssignProjectRouter);
app.use("/group",GroupRouter);
app.use("/assigntask",AssignTaskRouter);
app.use("/tasksubmition",TaskSubmitionRouter);

app.listen(3001);
console.log("Server Invoked at http://localhost:3001");