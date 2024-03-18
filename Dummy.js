import React, { useState } from 'react'
import './Dummy.css';
import { Button, Checkbox, DatePicker, Input, Radio, Select, Switch, Col, Row} from 'antd';
import med from '../images/med.webp';

  const Dummy = () => {


    const [inputarr,setInputarr]=useState([])
    const [prescriptionStatusArr, setPrescriptionStatusArr] = useState([]);

    const [inputdata,SetInputdata]=useState({
      name:"",
      medicine:"",
      dosage:"",
      quality : "",
      type : 1,
      exp:"",
      selectedDoctor: null
    })
      
    const handleChange = (value) => {
        SetInputdata({ ...inputdata, type: value });
      };
    
    const handleCheckboxChange = (name, checked) => {
        SetInputdata({...inputdata, [name]: checked ? 1 : 2 });
    };

    const handleDoctorChange = (value) => {
        SetInputdata({ ...inputdata, selectedDoctor: value });
     };

    const [editIndex, setEditIndex] = useState(null);
    
    const [isEditing, setIsEditing] = useState(false);
    function submitHandle() {
      const newRow = {
        name: inputdata.name,
        medicine: inputdata.medicine,
        dosage: true, 
        quality: inputdata.quality === 1 ? 'Generic' : 'Brand',
        type: value === 1 ? 'Pill' : value === 2 ? 'Liquid' : 'Injection',
        status: prescriptionStatus,
        exp: inputdata.exp,
        selectedDoctor: inputdata.selectedDoctor,
      };
    
      if (editIndex !== null) {
        const updatedInputarr = [...inputarr];
        updatedInputarr[editIndex] = { ...inputdata };
        setInputarr(updatedInputarr);
        setEditIndex(null);
        setIsEditing(false); 
      } else {
        setInputarr([...inputarr, { ...inputdata, status: prescriptionStatus }]);
        setPrescriptionStatusArr([...prescriptionStatusArr, prescriptionStatus]);
        setIsEditing(true); 
      }
    
      SetInputdata({
        name: '',
        medicine: '',
        dosage: '',
        quality: 1,
        type: 1,
        status: '',
        exp: '',
        selectedDoctor: '',
      });
      setPrescriptionStatus(true);
    }
    
      const handleEdit = (index) => {
        SetInputdata({ ...inputarr[index] });
        setEditIndex(index);
      };
    
      const handleDelete = (index) => {
        const updatedInputarr = [...inputarr];
        updatedInputarr.splice(index, 1);
        setInputarr(updatedInputarr);
      };

      const [prescriptionStatus, setPrescriptionStatus] = useState(true);
      const handleSwitchChange = (checked) => {
        setPrescriptionStatus(checked);
      };
    
      const updateHandle = () => {
        const updatedInputarr = [...inputarr];
        updatedInputarr[editIndex] = { ...inputdata };
        setInputarr(updatedInputarr);
        setEditIndex(null);
        setIsEditing(false);
      };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
      SetInputdata({ ...inputdata, type: e.target.value });
    };


return (
  <Row>
      <Col span={24}>
          <div className='med_manage'>
              <div className='manage_header'>
                  <img src={med} />
                  <h2>Medication Management</h2>
              </div>
              <div className='manage_body'>
                  <div className='inputs'>
                      <label>Patient Name :</label>
                      <Input type='text' name="name" value={inputdata.name} onChange={((event) => SetInputdata({...inputdata, name : event.target.value}))} placeholder='Patient name'></Input>
                  </div>
                  <div className='inputs'>
                      <label>Medication :</label>
                      <Input type='text' name="medicine" value={inputdata.medicine} onChange={((event) => SetInputdata({...inputdata, medicine : event.target.value}))} placeholder='Medication'></Input>
                  </div>
                  <div className='inputs'>
                      <label>Dosage :</label>
                      <Input type='text' name='dosage' value={inputdata.dosage} onChange={((event) => SetInputdata({...inputdata, dosage : event.target.value}))} placeholder='Dosage Instructions'></Input>
                  </div>
                  <div className='check'>
                      <div>
                          <h3>Medicine Brand :</h3>
                      </div>
                      <div className='check_in'>
                            <Checkbox value={1} onChange={(e) => handleCheckboxChange("quality", e.target.checked)}>Generic</Checkbox>
                            <Checkbox value={2} onChange={(e) => handleCheckboxChange("quality", e.target.checked)}>Brand</Checkbox>
                      </div>
                  </div>
                  <div className='radio'>
                      <div>
                          <h3> Medicine Type</h3>
                      </div>
                      <div>
                          <Radio.Group onChange={onChange} value={value}>
                              <Radio value={1}>Pill</Radio>
                              <Radio value={2}>Liquid</Radio>
                              <Radio value={3}>Injection</Radio>
                          </Radio.Group>
                      </div>
                  </div>
                  <div className='switch'>
                      <h3>Prescription Status :</h3>
                      {/* <Switch checkedChildren="Required" unCheckedChildren="Not Required" defaultChecked/> */}
                      <Switch checked={prescriptionStatus} onChange={handleSwitchChange} checkedChildren="Required"  unCheckedChildren="Not Required"/>
                  </div>
                  <div className='exp_date'>
                      <h3>Expiratrion Date :</h3>
                      <DatePicker onChange={(date, dateString) => SetInputdata({...inputdata, exp: dateString})}/>
                  </div>
                  <div className='select'>
                     <div className='select_title'>
                          <h3>Prescribing Doctor :</h3>
                     </div>
                     <div className='select_drop'>
                     <Select
                              defaultValue="lucy"
                              value={inputdata.selectedDoctor}
                              onChange={handleDoctorChange}
                              options={[
                                  {
                                  value: 'jack',
                                  label: 'Jack',
                                  },
                                  {
                                  value: 'lucy',
                                  label: 'Lucy',
                                  },
                                  {
                                  value: 'Yiminghe',
                                  label: 'yiminghe',
                                  }
                              ]}
                              />
                     </div>
                  </div>
                
                  <div className='submit'>
               {editIndex !== null ? (
                    <>
                      <Button type='primary' onClick={updateHandle}>
                        Update
                      </Button>
                      <Button type='primary' onClick={() => setEditIndex(null)}>
                        Cancel Edit
                      </Button>
                    </>
                  ) : (
                    <Button type='primary' onClick={submitHandle}>
                      Submit
                    </Button>
                  )}
            </div>
              </div>
          </div>
          <div className='table'>
              <table border={1} width="100%">
                  <tr>
                    <th>Patient Name</th>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Medicine Brand</th>
                    <th>Medicine Type</th>
                    <th>Prescription Status</th>
                    <th>Exp Date</th>
                    <th>Recommended Doctor</th>
                    <th>Action</th>
                  </tr>

              {inputarr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.medicine}</td>
                  <td>{info.dosage}</td>
                  <td>{info.quality ===1 ? "Generic" : info.quality ===2 ? "Brand" : "unknown" }</td>
                  <td>
                  {info.type === 1 ? "Pill" : info.type === 2 ? "Liquid" : "Injection"}
                  </td>
                  <td>{info.status ? "Required" : "Not Required"}</td>
                  <td>{info.exp}</td>
                  <td>{info.selectedDoctor}</td>
                  <td className='action'>
                    <Button type='primary' onClick={() => handleEdit(ind)} >Edit</Button>
                    <Button type='primary'onClick={() => handleDelete(ind)} >Delete</Button>
                  </td>
                </tr>
                   ))}
              </table>
          </div>
      </Col>
  </Row>
)
}

export default Dummy;


