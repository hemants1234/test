import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){
	
   let  contacts =  [
 	{  id:  1,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f1.jpeg' },
 	{  id:  2,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f2.jpeg' },
 	{  id:  3,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f3.jpeg' },
  {  id:  4,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f4.jpeg' },
 	{  id:  5,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f5.jpeg' },
 	{  id:  6,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f6.jpeg' },
  {  id:  7,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f7.jpeg' },
 	{  id:  8,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f8.jpeg' },
 	{  id:  9,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f9.jpeg' },
  {  id:  10,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f10.jpeg' },
 	{  id:  11,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f11.jpeg' },
 	{  id:  12,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f12.jpeg' },
  {  id:  13,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f13.jpeg' },
 	{  id:  14,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f14.jpeg' },
 	{  id:  15,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f15.jpeg' },
  {  id:  16,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f16.jpeg' },
 	{  id:  17,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f17.jpeg' },
 	{  id:  18,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f18.jpeg' },
  {  id:  19,  name:  'Contact 1', email: 'contact1@email.com', src:'../../../assets/f19.jpeg' },
 	{  id:  20,  name:  'Contact 2', email: 'contact2@email.com', src:'../../../assets/f20.jpeg' },
 	{  id:  21,  name:  'Contact 3', email: 'contact3@email.com', src:'../../../assets/f21.jpeg' },
 	{  id:  22,  name:  'Contact 4', email: 'contact4@email.com',  src:'../../../assets/f22.jpeg'}
   ];

   return {contacts};
	
  }
}