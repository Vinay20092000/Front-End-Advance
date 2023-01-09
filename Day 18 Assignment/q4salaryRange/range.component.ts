import { Component } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent {
  empsArray:any[] = 
  [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":32000,"deptno":30},
    {"empno":7369,"ename":"SMITH","job":"CLERK","sal":80000,"deptno":20},
    {"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":16000,"deptno":30},
    {"empno":7521,"ename":"WARD","job":"SALESMAN","sal":12500,"deptno":30},
    {"empno":7566,"ename":"JONES","job":"MANAGER","sal":29750,"deptno":20},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":125000,"deptno":30},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":28500,"deptno":30},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":24500,"deptno":10},
    {"empno":7839,"ename":"KING","job":"PRESIDENT","sal":50000,"deptno":10},
    {"empno":7844,"ename":"TURNER","job":"SALESMAN","sal":150000,"deptno":30},
    {"empno":7876,"ename":"ADAMS","job":"CLERK","sal":110000,"deptno":20},
    {"empno":7900,"ename":"JAMES","job":"CLERK","sal":95000,"deptno":30},
    {"empno":7902,"ename":"FORD","job":"ANALYST","sal":30000,"deptno":20},
    {"empno":8545,"ename":"KIRAN","job":"MANAGER","sal":58900,"deptno":10}
  ];
}
