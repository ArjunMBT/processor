// import React, { useState } from "react";

// function DataTransfer() {
//     const [source, setSource] = useState("A");
//     const [destination, setDestination] = useState("B");
//     const [data, setData] = useState("00");
//     const [memory, setMemory] = useState(Array(65536).fill("00"));

//     const registers = { A: "00", B: "00", C: "00", D: "00", E: "00", H: "00", L: "00" };

//     function executeInstruction() {
//         switch (instruction) {
//             case "MOV":
//                 registers[destination] = registers[source];
//                 break;
//             case "MVI":
//                 registers[destination] = data;
//                 break;
//             case "LXI":
//                 registers[destination] = data;
//                 registers[destination + 1] = memory[parseInt(address, 16) + 1];
//                 break;
//             case "LDA":
//                 registers["A"] = memory[parseInt(address, 16)];
//                 break;
//             case "STA":
//                 memory[parseInt(address, 16)] = registers["A"];
//                 break;
//             case "LHLD":
//                 registers["H"] = memory[parseInt(address, 16) + 1];
//                 registers["L"] = memory[parseInt(address, 16)];
//                 break;
//             case "SHLD":
//                 memory[parseInt(address, 16) + 1] = registers["H"];
//                 memory[parseInt(address, 16)] = registers["L"];
//                 break;
//             case "LDAX":
//                 registers["A"] = memory[parseInt(registers[destination] + registers[source], 16)];
//                 break;
//             case "STAX":
//                 memory[parseInt(registers[destination] + registers[source], 16)] = registers["A"];
//                 break;
//             case "XCHG":
//                 const temp = registers["H"];
//                 registers["H"] = registers["D"];
//                 registers["D"] = temp;
//                 temp = registers["L"];
//                 registers["L"] = registers["E"];
//                 registers["E"] = temp;
//                 break;
//             case "MOVPE":
//                 registers["H"] = memory[parseInt(address, 16) + 1];
//                 registers["L"] = memory[parseInt(address, 16)];
//                 setMemory([...memory.slice(0, parseInt(address, 16)), registers["PCH"], registers["PCL"], ...memory.slice(parseInt(address, 16) + 2)]);
//                 break;
//             case "MOVP":
//                 registers["PCH"] = memory[parseInt(address, 16) + 1];
//                 registers["PCL"] = memory[parseInt(address, 16)];
//                 break;
//             default:
//                 break;
//         }
//     }

//     return (
//         <div>
//             <h2>Data Transfer Instructions</h2>
//             <div>
//                 <label htmlFor="instruction-select">Select an instruction:</label>
//                 <select id="instruction-select" onChange={(e) => setInstruction(e.target.value)}>
//                     <option value="MOV">MOV</option>
//                     <option value="MVI">MVI</option>
//                     <option value="LXI">LXI</option>
//                     <option value="LDA">LDA</option>
//                     <option value="STA">STA</option>
//                     <option value="LHLD">LHLD</option>
//                     <option value="SHLD">SHLD</option>
//                     <option value="LDAX">LDAX</option>
//                     <option value="STAX">STAX</option>
//                     <option value="XCHG">XCHG</option>
//                     <option value="MOVPE">MOVPE</option>
//                     <option value="MOVP">MOVP</option>
//                 </select>
//             </div>
//             {instruction === "MOV" && (
//                 <div>
//                     <h3>Move Data</h3>
//                     <div>
//                         <label htmlFor="source-select">Source:</label>
//                         <select id="source-select" onChange={(e) => setSource(e.target.value)}>
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="C">C</option>
//                             <option value="D">D</option>
//                             <option value="E">E</option>
//                             <option value="H">H</option>
//                             <option value="L">L</option>
//                             <option value="M">M</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="destination-select">Destination:</label>
//                         <select id="destination-select" onChange={(e) => setDestination(e.target.value)}>
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="C">C</option>
//                             <option value="D">D</option>
//                             <option value="E">E</option>
//                             <option value="H">H</option>
//                             <option value="L">L</option>
//                             <option value="M">M</option>
//                         </select>
//                     </div>
//                     <button onClick={executeInstruction}>Execute</button>
//                     <p>Result: {result}</p>
//                 </div>
//             )}
//             {instruction === "MVI" && (
//                 <div>
//                     <h3>Move Immediate Data</h3>
//                     <div>
//                         <label htmlFor="destination-select">Destination:</label>
//                         <select id="destination-select" onChange={(e) => setDestination(e.target.value)}>
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="C">C</option>
//                             <option value="D">D</option>
//                             <option value="E">E</option>
//                             <option value="H">H</option>
//                             <option value="L">L</option>
//                             <option value="M">M</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="data-input">Data:</label>
//                         <input id="data-input" type="text" value={data} onChange={(e) => setData(e.target.value)} />
//                     </div>
//                     <button onClick={executeInstruction}>Execute</button>
//                     <p>Result: {result}</p>
//                 </div>
//             )}
//             {instruction === "LXI" && (
//                 <div>
//                     <h3>Load Register Pair Immediate</h3>
//                     <div>
//                         <label htmlFor="register-pair-select">Register Pair:</label>
//                         <select id="register-pair-select" onChange={(e) => setRegisterPair(e.target.value)}>
//                             <option value="B">B</option>
//                             <option value="D">D</option>
//                             <option value="H">H</option>
//                             <option value="SP">SP</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="data-input">Data:</label>
//                         <input id="data-input" type="text" value={data} onChange={(e) => setData(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor="address-input">Address:</label>
//                         <input id="address-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//                     </div>
//                     <button onClick={executeInstruction}>Execute</button>
//                     <div>
//                         <p>Source: {source}</p>
//                         <p>Destination: {destination}</p>
//                         <p>Result: {result}</p>
//                     </div>
//                 </div>

//     );
// }

// export default DataTransfer;