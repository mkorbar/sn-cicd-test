import { Square, calculateWinner } from "../App";
import { describe, it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

describe('calculateWinner works correctly', () => {

    it('should return null if no moves were made', () => {
        // A,A,A:
        // Arrange
        const state = [
            '','','',
            '','','',
            '','','',
        ];
        // Act
        const res = calculateWinner(state);
        // Assert

        expect(res).toBe(null);
    });

    it('should return null if some moves were made, but there is no winner yet', () => {
        // A,A,A:
        // Arrange
        const state = [
            'X','','X',
            '','X','',
            'O','','O',
        ];
        // Act
        const res = calculateWinner(state);
        // Assert

        expect(res).toBe(null);
    });

    it('should return "No one" if the board is full, but there is no winner', () => {
        const state = [
            'X','O','X',
            'X','X','O',
            'O','X','O',
        ];
        expect(calculateWinner(state)).toBe("No one");
    });

});



