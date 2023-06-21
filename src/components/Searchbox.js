import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout  } from '../features/authSlice';

export const Searchbox = () => {
  const auth = useSelector( state => state.auth );
  const dispatch = useDispatch();

    
  return (
    <div className="headind_srch">
        <div className="recent_heading mt-2">
            <h4>{ auth.name }</h4>
        </div>
        <div className="srch_bar">
            <div className="stylish-input-group">
                <button 
                    className="btn text-danger"
                    onClick={() => dispatch(logout()) }
                >
                    Salir
                </button>
            </div>
        </div>
    </div>
  )
}
