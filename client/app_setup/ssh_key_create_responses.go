// Code generated by go-swagger; DO NOT EDIT.

package app_setup

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/bitrise-io/bitrise-api-client/models"
)

// SSHKeyCreateReader is a Reader for the SSHKeyCreate structure.
type SSHKeyCreateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *SSHKeyCreateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewSSHKeyCreateOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewSSHKeyCreateBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewSSHKeyCreateUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewSSHKeyCreateNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewSSHKeyCreateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewSSHKeyCreateOK creates a SSHKeyCreateOK with default headers values
func NewSSHKeyCreateOK() *SSHKeyCreateOK {
	return &SSHKeyCreateOK{}
}

/*SSHKeyCreateOK handles this case with default header values.

OK
*/
type SSHKeyCreateOK struct {
	Payload *models.V0SSHKeyRespModel
}

func (o *SSHKeyCreateOK) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/register-ssh-key][%d] sshKeyCreateOK  %+v", 200, o.Payload)
}

func (o *SSHKeyCreateOK) GetPayload() *models.V0SSHKeyRespModel {
	return o.Payload
}

func (o *SSHKeyCreateOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0SSHKeyRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSSHKeyCreateBadRequest creates a SSHKeyCreateBadRequest with default headers values
func NewSSHKeyCreateBadRequest() *SSHKeyCreateBadRequest {
	return &SSHKeyCreateBadRequest{}
}

/*SSHKeyCreateBadRequest handles this case with default header values.

Bad Request
*/
type SSHKeyCreateBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *SSHKeyCreateBadRequest) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/register-ssh-key][%d] sshKeyCreateBadRequest  %+v", 400, o.Payload)
}

func (o *SSHKeyCreateBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *SSHKeyCreateBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSSHKeyCreateUnauthorized creates a SSHKeyCreateUnauthorized with default headers values
func NewSSHKeyCreateUnauthorized() *SSHKeyCreateUnauthorized {
	return &SSHKeyCreateUnauthorized{}
}

/*SSHKeyCreateUnauthorized handles this case with default header values.

Unauthorized
*/
type SSHKeyCreateUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *SSHKeyCreateUnauthorized) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/register-ssh-key][%d] sshKeyCreateUnauthorized  %+v", 401, o.Payload)
}

func (o *SSHKeyCreateUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *SSHKeyCreateUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSSHKeyCreateNotFound creates a SSHKeyCreateNotFound with default headers values
func NewSSHKeyCreateNotFound() *SSHKeyCreateNotFound {
	return &SSHKeyCreateNotFound{}
}

/*SSHKeyCreateNotFound handles this case with default header values.

Not Found
*/
type SSHKeyCreateNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *SSHKeyCreateNotFound) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/register-ssh-key][%d] sshKeyCreateNotFound  %+v", 404, o.Payload)
}

func (o *SSHKeyCreateNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *SSHKeyCreateNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSSHKeyCreateInternalServerError creates a SSHKeyCreateInternalServerError with default headers values
func NewSSHKeyCreateInternalServerError() *SSHKeyCreateInternalServerError {
	return &SSHKeyCreateInternalServerError{}
}

/*SSHKeyCreateInternalServerError handles this case with default header values.

Internal Server Error
*/
type SSHKeyCreateInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *SSHKeyCreateInternalServerError) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/register-ssh-key][%d] sshKeyCreateInternalServerError  %+v", 500, o.Payload)
}

func (o *SSHKeyCreateInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *SSHKeyCreateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
