// 8085 instruction set - Data Transfer Group

// Move Data (MOV)
function MOV(reg1, reg2) {
    reg1 = reg2;
}

// Move Immediate Data (MVI)
function MVI(reg, data) {
    reg = data;
}

// Load Register Pair Immediate (LXI)
function LXI(reg_pair, data) {
    reg_pair = data;
}

// Load Accumulator Directly (LDA)
function LDA(mem_address) {
    accumulator = memory[mem_address];
}

// Store Accumulator Directly (STA)
function STA(mem_address) {
    memory[mem_address] = accumulator;
}

// Load H and L Direct (LHLD)
function LHLD(mem_address) {
    H = memory[mem_address + 1];
    L = memory[mem_address];
}

// Store H and L Direct (SHLD)
function SHLD(mem_address) {
    memory[mem_address + 1] = H;
    memory[mem_address] = L;
}

// Load Accumulator Indirectly (LDAX)
function LDAX(reg_pair) {
    accumulator = memory[reg_pair];
}

// Store Accumulator Indirectly (STAX)
function STAX(reg_pair) {
    memory[reg_pair] = accumulator;
}

// Exchange Register Pairs (XCHG)
function XCHG() {
    var temp = DE;
    DE = HL;
    HL = temp;
}

// Move Program Counter to Memory (MOVPE)
function MOVPE(mem_address) {
    memory[mem_address] = PC & 0xFF;
    memory[mem_address + 1] = (PC >> 8) & 0xFF;
}

// Move Memory to Program Counter (MOVP)
function MOVP(mem_address) {
    PC = (memory[mem_address + 1] << 8) | memory[mem_address];
}
