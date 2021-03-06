import React from 'react';
import Button from 'Components/Button/Button';

const ButtonComponents = () => {
  return (
    <div className='subSection' id='ButtonComponents'>
      <h3>Button Component</h3>
      <Button 
        id={'demoPrimaryButton'}
        type={'button'}
        onClick={()=> null}
        children={'Primary Button'}
      />
      <Button 
        id={'demoSecondaryButton'}
        type={'button'}
        onClick={()=> null}
        children={'Secondary Button'}
        className={'secondaryButton'}
      />
      <Button 
        id={'demoButtonDisabled'}
        type={'button'}
        onClick={()=> null}
        children={'Disabled Button'}
        isDisabled={true}
      />
    </div>
  )
};

export default ButtonComponents;