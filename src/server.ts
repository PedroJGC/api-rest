import express from 'express';

function sum(a: number, b: number): number {
  return a + b;
}

const result: number = sum(5, 3);
console.log(`Resultado da soma ${result}`);
