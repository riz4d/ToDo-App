import React from "react";
import './Todo.css';
import Footer from './Footer';

class Ap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes : ['test note'],
            txtcontnt : '',
            completed_nt : ['test note']
        };
    }
    txtchange = (e) => {
        this.setState({txtcontnt : e.target.value})
    }
    addnote = (e) => {
        let current_note=this.state.txtcontnt;
        let current_notes=this.state.notes;
        current_notes.push(current_note)
        this.setState({notes:current_notes})
    } 
    removenote = (x)=>{
        let current_notes=this.state.notes
        current_notes.splice(x,1)
        this.setState({notes:current_notes})
    }
    finished = (y)=>{
        let current_notes=this.state.notes
        let current_note_index = y
        let finished_note = current_notes[current_note_index]
        let Completed_notes=this.state.completed_nt;
        Completed_notes.push(finished_note)
        current_notes.splice(y,1)
        this.setState({notes:current_notes})

    }
    render()
        {
        return(
            <section class="vh-100">
               <div class="container py-5 h-100">
                 <div class="row d-flex justify-content-center align-items-center h-100">
                   <div class="col col-lg-9 col-xl-7">
                     <div class="card rounded-3">
                       <div class="card-body p-4">
             
                         <h4 class="text-center my-3 pb-3">To Do App</h4>
             
                         <div class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                           <div class="col-12">
                             <div class="form-outline">
                               <input type="text" id="form1" class="form-control" onChange={this.txtchange}/>
                               <label class="form-label" for="form1">Enter a task here</label>
                             </div>
                           </div>
             
                           <div class="col-12">
                             <button type="submit" class="btn btn-primary" onClick={this.addnote}>Add</button>
                           </div>
                         </div>
                         <caption>Ongoing Tasks</caption>
                         <table class="table mb-4">
                           <thead>
                             <tr>
                               <th scope="col">No.</th>
                               <th scope="col">Todo item</th>
                               <th scope="col">Actions</th>
                             </tr>
                           </thead>
                           <tbody>
                            {
                            this.state.notes.map((note,key)=>{
                                return(
                                <tr key={key}>
                                <th scope="row">{key+1}</th>
                                <td>{note}</td>
                                <td>
                                  <button type="submit" class="btn btn-danger"  onClick={()=>{this.removenote(key)}}>Delete</button><br/><br/>
                                  <button type="submit" class="btn btn-success" onClick={()=>this.finished(key)}>Finished</button>
                                </td>
                              </tr>
                                )
                            })}
                           </tbody>
                         </table>
                         <caption>Completed Tasks</caption>
                         <table class="table mb-4">
                           <thead>
                             <tr>
                               <th scope="col">No.</th>
                               <th scope="col">Todo item</th>
                               <th scope="col">Status</th>
                             </tr>
                           </thead>
                           <tbody>
                            {
                            this.state.completed_nt.map((note,key)=>{
                                return(
                                <tr key={key}>
                                <th scope="row">{key+1}</th>
                                <td>{note}</td>
                                <td>
                                  Completed
                                </td>
                              </tr>
                                )
                            })}
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <Footer/>
            </section>
        );
    }
}
export default Ap
