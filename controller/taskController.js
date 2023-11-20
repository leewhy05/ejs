const TASKS = require('../model/taskModel')

const create_task =  async(req,res)=>{
    // console.log(req.body);
    const newTask = new TASKS(req.body)
    try{
        await newTask.save();
        res.status(201).redirect('/')
    }catch(error){
        console.log(error);
    }
};


const create_singlePage =async (req,res)=>{
    const id = req.params.id
    console.log(id);
    try{
    const result = await TASKS.findById(id)
      res.status(200).render('singlePage',{title:'single || page',task:result})
    }catch(error){
        console.log(error);
    }
}

const delete_page = async (req,res)=>{
    const id = req.params.id;
    try{
        await TASKS.findByIdAndDelete(id);
        res.redirect('/')
    }catch(error){
        console.log(error);
    }
}
// // Edit Route

// const edit_task = async (req, res) => {
//   const { id } = req.params.id;

//   try {
//     const task = await TASKS.findById(id);
//     res.status(200).render('editPage', {title: 'EDITPAGE', task });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// };




const edit_page = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await TASKS.findById(id);
    res.render('editPage', { title: 'Edit || Task', task: result });
  } catch (error) {
    console.log(error);
  }
};


//update route

const edit = async (req, res) => {
  const id = req.params.id;
  const updateData =  req.body
  try {
     await TASKS.findByIdAndUpdate(id, updateData,{new:true});
    res.status(301).redirect('/');
  } catch (error) {
    console.log(error);
  }
};

  


module.exports ={
    create_task
    ,create_singlePage,
    delete_page,
    edit_page,
    edit
}