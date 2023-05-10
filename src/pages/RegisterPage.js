import React from 'react';
import '../css/login-register.css';
import { Link } from 'react-router-dom';


export const RegisterPage = () => {
  return (
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-50 p-b-90">
				<form class="login100-form validate-form flex-sb flex-w">
					<span class="login100-form-title mb-3">
						Chat - Registro
					</span>

					<div class="wrap-input100 validate-input mb-3">
						<input class="input100" type="text" name="name" placeholder="Nombre" />
						<span class="focus-input100"></span>
					</div>

					
					<div class="wrap-input100 validate-input mb-3">
						<input class="input100" type="email" name="email" placeholder="Email" />
						<span class="focus-input100"></span>
					</div>
					
					
					<div class="wrap-input100 validate-input mb-3">
						<input class="input100" type="password" name="password" placeholder="Password" />
						<span class="focus-input100"></span>
					</div>
					
					<div class="row mb-3">
						<div class="col text-right">
							<Link to='/auth/login' class="txt1">
								Ya tienes cuenta?
							</Link>
						</div>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button class="login100-form-btn">
							Crear cuenta
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
	
  )
}
