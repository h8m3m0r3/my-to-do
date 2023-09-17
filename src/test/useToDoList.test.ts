import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useToDoList } from 'hooks';
import { ToDoListType } from 'types';

describe('useToDoList', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useToDoList());

    expect(result.current.inputValue).toBe('');
    expect(result.current.toDoList).toEqual([]);
    expect(result.current.listFilter).toBe('all');
  });

  it('should update inputValue when onChangeInputValue is called', () => {
    const { result } = renderHook(() => useToDoList());

    act(() => {
      result.current.onChangeInputValue({ target: { value: 'Test Task' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).toBe('Test Task');
  });

  it('should delete a task from the list when handleDeleteTask is called', () => {
    const { result } = renderHook(() => useToDoList());
    const taskId = 1;
    const task: ToDoListType = { id: taskId, text: 'Task 1', active: true };

    act(() => {
      result.current.setToDoList([task]);
      result.current.handleDeleteTask(taskId);
    });

    expect(result.current.toDoList.length).toBe(0);
  });

  it('should change the task filter when handleChangeTaskFilter is called', () => {
    const { result } = renderHook(() => useToDoList());

    act(() => {
      result.current.handleChangeTaskFilter('completed');
    });

    expect(result.current.listFilter).toBe('completed');
  });
});
