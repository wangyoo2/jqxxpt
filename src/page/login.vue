<template>
    <div class="loginbg">
    	<div class="login-div">
    		<div class="left">
    			<img src="../images/aq_03.png"/>
    			<div>
    				株洲市养殖业监管<br/>信息平台
    			</div>
    		</div>
    		<div class="right">
    			<div class="login-title">
    				<b class="cn">登 录</b>
    				<label class="en">SIGN IN</label>
    			</div>
          <el-form class="login-form" ref="form" label-width="28%" label-position="right">
            <el-form-item label="账户：">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
          </el-form>
				  <div class="control-group">
				    <div class="controls">
              <el-button type="primary" class="btn-login" @click="onSubmit" :loading="loading">登录</el-button>
				    </div>
				  </div>
    		</div>
    	</div>
    	<p class="bottom-right">主办单位：株洲市畜牧兽医水产局</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { login } from 'src/service/user'
import { getList } from 'src/service/menu'

export default {
    data() {
        return {
            loading:false,
            form: {
                username: 'admin',
                password: '000000',
            }
        }
    },
    methods: {
        ...mapMutations([
            'RECORD_USERINFO'
        ]),
        async onSubmit() {
            try {
                this.loading = true;
                let data = await login(this.form);
                if(data=="success"){
                  let menus = await getList()
                  this.RECORD_USERINFO({ token:data.token, user:data.user||{}, menus });
                  this.$router.push(this.$route.query.redirect || '/')
                } else if(data=="mmcw") {
                   this.$message.error("密码错误！");
                } else if(data=="myqx") {
                   this.$message.error("用户没有授权！");
                } else {
                   this.$message.error("用户不存在！");
                }
            } catch (e) {
                this.$message.error(e.message)
            }finally{
              this.loading = false;
            }
        }
    }
}
</script>

<style lang="scss">
.loginbg{
	background: url('../images/aq_login_01.jpg') no-repeat center;
  width: 100vw;
  height: 100vh;
  background-size: auto 100%;
}
.login-form{
  margin:1.5rem 0;
  background:#f1f2f4;
  border:1px rgba(0,0,0,.1) solid;
  border-radius:.25rem;
  .form-input{
      border: 0;
  }
  .el-form-item{
    border-top:1px rgba(0,0,0,.1) solid;
    &:first-child{
      border:0;
    }
    margin-bottom:0;
    line-height:3rem;
    .el-form-item__label{
      color:#6f7278;
      line-height: 3rem;
      padding:0;
      font-size:1rem;
    }
    .el-input input{
      height:3rem;
      border:0;
      background:transparent;
      outline: none;
    }
  }
}

.login-div{
	width: 36.347rem;
  height: 18.7rem;
	position: absolute;
  left: 0px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display:flex;
  background: #fff;
  border-radius: .3rem;
  .left{
      width: 50%;
      height: 100%;
      background: #75c805;
      border-top-left-radius:.3rem;
      border-bottom-left-radius:.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size:1.4rem;
      color:#fff;
      text-align:center;
      img{
        width:30%;
      }
  }
  .right{
    flex:1;
    padding: 2rem 2rem;
  }
  .login-title .en{
    color:#4ba700;
    font-size:.8rem;
  }
}
.btn-login{
  width:100%;
  height:3.5rem;
  background:url(../images/aq_btn.png) no-repeat !important;
  background-size:100% 100%;
  border:0;
  font-size: 1.2rem;
  color: #fff!important;
}
.bottom-right{
	  position: absolute;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    font-size: 1rem;
}
</style>
