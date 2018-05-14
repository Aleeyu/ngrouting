import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  formModel: FormGroup;
  job:FormControl;
  //自定义验证器，校验一个,这些校验可以写到单独的ts文件中，然后暴露出来，给其他模块使用
  validphone(control:FormControl):any{
    var myreq = /^[0-9]{4}$/;
    let valid = myreq.test(control.value)
    console.log('num校验结果是'+ valid)
    if (valid) {
      // return 表示通过校验
      return null
    } else {
      if (control.value) {
        return {
          phone:true
        }
      } else {
        return {
          required:true
        }
      }
    }
  }
  // 异步校验器.delay模拟异步
  validphoneasync(control:FormControl):any{
    var myreq = /^[0-9]{4}$/;
    let syncvalid = myreq.test(control.value)
    //console.log('异步校验num校验结果是'+ syncvalid)
    // 发送请求成功返回null
    return Observable.of(
      true ? null : {sync:true}
    ).delay(5000)//延迟5秒
  }
  //自定义验证器，校验多个
  validgroup(group:FormGroup):any{
    let pwd:FormControl = group.get("pwd") as FormControl;
    let rpwd:FormControl = group.get("rpwd") as FormControl;
    var myreq = /^[0-9]{6}$/;
    let valid = (pwd.value === rpwd.value)
    // console.log('num校验结果是'+ valid)
    // console.log(this.formModel.get('number'))
    if (valid) {
      // return 表示通过校验
      return null
    } else {
      return {
        equal:true,
        msg:'两次不匹配'
      }
    }
  }
  constructor(fb:FormBuilder) {
    this.formModel=fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      othername:['',this.validphone,this.validphoneasync],
      number:['',this.validphone],
      userinfo:fb.group({
        pwd:[''],
        rpwd:['']
      },{validator:this.validgroup}),
      emails:fb.array([
        ['']
      ])
    })
    this.job = new FormControl(1111111111)
  }

  ngOnInit() {
    console.log(this.formModel.get('emails'))
  } addemail(){
    let emails = this.formModel.get('emails') as FormArray
    emails.push(new FormControl("c@q.com"))
    // console.log(this.formModel.controls.emails.controls)
  }
  onSubmit(){
    let isValid:boolean= this.formModel.get("username").valid;
    let error:any=this.formModel.get("username").errors;
    // console.log(error)
    //console.log(this.formModel.dirty)
    console.log(this.formModel.get("othername"))
  }
}
