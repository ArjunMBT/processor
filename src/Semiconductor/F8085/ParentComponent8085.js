import React, { Component } from 'react';
import SearchArray8085 from '../F8085/SearchArray8085'

class ParentComponent8085 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: [
        {id:0,
            Name:'',
            Description:'',
            Example:'',
            Addressing:''
          },

        // 1 MOV: Move Data
        {
          id:1,
          Name: 'MOV',
          Description: 'Copies the contents of one register or memory location to another register or memory location.',
          Example: 'MOV A, B ; copies the contents of register B to register A',
          Addressing: 'Register-to-register, immediate data to register, memory-to-register, and register-to-memory.'
        },
          //2. MVI: Move Immediate Data
          {
            id:2,
           Name: 'MVI',
           Description: 'Loads immediate data into a register or memory location.',
           Example: 'MVI A, 20H ; loads the immediate data 20H into register A',
           Addressing: 'Register addressing and memory addressing'
          },
         // 3. LXI: Load Register Pair Immediate
         {id:3,
           Name: 'LXI',
           Description: 'Loads an immediate 16-bit data into a register pair.',
           Example: 'LXI H, 2050H ; loads the immediate data 2050H into the register pair HL',
           Addressing:'Immediate data.'
         },
          //4. LDA: Load Accumulator Directly
          {id:4,
           Name: 'LDA',
           Description: 'Loads the contents of a memory location into the accumulator register.',
           Example: 'LDA 2050H ; loads the contents of memory location 2050H into the accumulator register',
           Addressing:'Direct addressing.'
          },
         // 5. STA: Store Accumulator Directly
         {id:5,
           Name: 'STA',
           Description: 'Stores the contents of the accumulator register into a memory location.',
           Example: 'STA 2050H ; stores the contents of the accumulator register into memory location 2050H',
           Addressing:'Direct addressing'
         },
         // 6. LHLD: Load H and L Direct
         {id:6,
           Name: 'LHLD',
           Description: 'Loads the contents of two consecutive memory locations into the register pair HL.',
           Example: 'LHLD 2050H ; loads the contents of memory location 2050H into L and the contents of memory location 2051H into H',
           Addressing: 'Direct addressing'
         },
          //7. SHLD: Store H and L Direct
          {id:7,
           Name: 'SHLD',
           Description: 'Stores the contents of the register pair HL into two consecutive memory locations.',
           Example: 'SHLD 2050H ; stores the contents of L into memory location 2050H and the contents of H into memory location 2051H',
           Addressing: 'Direct addressing'
          },
         // 8. LDAX: Load Accumulator Indirectly
         {id:8,
           Name: 'LDAX',
           Description: 'Loads the contents of a memory location addressed by the contents of register pair BC into the accumulator.',
           Example: 'LDAX B ; loads the contents of the memory location addressed by register pair BC into the accumulator',
           Addressing:'Register indirect addressing.'
         },
          //9. STAX: Store Accumulator Indirectly
          {id:9,
           Name: 'STAX',
           Description: 'Stores the contents of the accumulator into a memory location addressed by the contents of register pair BC.',
           Example:'STAX B ; stores the contents of the accumulator into the memory location addressed by register pair BC',
           Addressing:'Register indirect addressing.'
          },
          //10. XCHG: Exchange Register Pairs
          {id:10,
           Name: 'XCHG',
           Description: 'Exchanges the contents of register pairs DE and HL.',
           Example: 'XCHG ; exchanges the contents of register pairs DE and HL',
           Addressing: 'No addressing mode.'
          },
          //11. MOVPE: Move Program Counter to Memory
          {id:11,
           Name: 'MOVPE',
           Description: 'Moves the contents of the program counter (PC) to a memory location specified by the operand.',
           Example:'MOVPE 2050H ; moves the contents of the program',
           Addressing:'Direct addressing. The 16-bit memory address is specified as an immediate value in the instruction. The program counter is a 16-bit register that holds the address of the next instruction to be executed, so MOVPE is used to store the current program counter value in memory for later retrieval.'
          },
          
            // 12 MOVP: Move Memory to Program Counter
            {id:12,
           Name:'MOVP',
           Description: 'Moves the contents of a memory location to the program counter (PC).',
           Example: 'MOVP 2050H ; moves the contents of memory location 2050H to the program counter',
           Addressing:'Direct addressing'
            }

          ]
    };
  }

  render() {
    const { dataArray } = this.state;

    return (
      <div>
      <SearchArray8085 dataArray={dataArray} />
      </div>
    );
  }
}

export default ParentComponent8085;




 // {
        //   id: 1,
        //   name: 'Item 1',
        //   description: 'This is the first item.',
        //   date: '2022-01-01',
        //   location: 'New York'
        // },
        // {
        //   id: 2,
        //   name: 'Item 2',
        //   description: 'This is the second item.',
        //   date: '2022-01-02',
        //   location: 'Los Angeles'
        // },
        // {
        //   id: 3,
        //   name: 'Item 3',
        //   description: 'This is the third item.',
        //   date: '2022-01-03',
        //   location: 'Chicago'
        // }