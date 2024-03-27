import React, { createContext, useState, useContext } from 'react';

export const MedicationContext = createContext();

export const useMedicationContext = () => useContext(MedicationContext);

export const MedicationProvider = ({ children }) => {
  const [inputarr, setInputarr] = useState([]);
  const [prescriptionStatusArr, setPrescriptionStatusArr] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    medicine: "",
    dosage: "",
    quality: 1,
    type: 1,
    exp: "",
    selectedDoctor: null
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prescriptionStatus, setPrescriptionStatus] = useState(true);

  const handleCheckboxChange = (name, checked) => {
    setInputdata({ ...inputdata, [name]: checked ? 1 : 2 });
  };

  const handleDoctorChange = (value) => {
    setInputdata({ ...inputdata, selectedDoctor: value });
  };

  const handleSwitchChange = (checked) => {
    setPrescriptionStatus(checked);
  };

  const submitHandle = () => {
    const newRow = {
      name: inputdata.name,
      medicine: inputdata.medicine,
      dosage: inputdata.dosage, // Assuming you want to keep the entered dosage
      quality: inputdata.quality === 1 ? 'Generic' : 'Brand',
      type: inputdata.type === 1 ? 'Pill' : inputdata.type === 2 ? 'Liquid' : 'Injection',
      status: prescriptionStatus,
      exp: inputdata.exp,
      selectedDoctor: inputdata.selectedDoctor,
    };

    if (editIndex !== null) {
      const updatedInputarr = [...inputarr];
      updatedInputarr[editIndex] = newRow;
      setInputarr(updatedInputarr);
      setEditIndex(null);
      setIsEditing(false);
    } else {
      setInputarr([...inputarr, { ...newRow }]);
      setPrescriptionStatusArr([...prescriptionStatusArr, prescriptionStatus]);
      setIsEditing(true);
    }

    setInputdata({
      name: '',
      medicine: '',
      dosage: '',
      quality: 1,
      type: 1,
      exp: '',
      selectedDoctor: null,
    });
    setPrescriptionStatus(true);
  };

  const handleEdit = (index) => {
    setInputdata({ ...inputarr[index] });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedInputarr = [...inputarr];
    updatedInputarr.splice(index, 1);
    setInputarr(updatedInputarr);
  };

  const updateHandle = () => {
    const updatedInputarr = [...inputarr];
    updatedInputarr[editIndex] = { ...inputdata };
    setInputarr(updatedInputarr);
    setEditIndex(null);
    setIsEditing(false);
  };
  const contextValue = {
    inputarr,
    setInputarr,
    prescriptionStatusArr,
    setPrescriptionStatusArr,
    inputdata,
    setInputdata,
    editIndex,
    setEditIndex,
    isEditing,
    setIsEditing,
    prescriptionStatus,
    setPrescriptionStatus,
    handleCheckboxChange,
    handleDoctorChange,
    handleSwitchChange,
    submitHandle,
    handleEdit,
    handleDelete,
    updateHandle
  };


  return (
    <MedicationContext.Provider value={contextValue}>
      {children}
    </MedicationContext.Provider>
  );
};
// export const useMedicationContext = () => useContext(MedicationContext);
export default MedicationProvider;
