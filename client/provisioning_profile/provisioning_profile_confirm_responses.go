// Code generated by go-swagger; DO NOT EDIT.

package provisioning_profile

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/bitrise-io/bitrise-api-client/models"
)

// ProvisioningProfileConfirmReader is a Reader for the ProvisioningProfileConfirm structure.
type ProvisioningProfileConfirmReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ProvisioningProfileConfirmReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewProvisioningProfileConfirmOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewProvisioningProfileConfirmBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewProvisioningProfileConfirmUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewProvisioningProfileConfirmNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewProvisioningProfileConfirmInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewProvisioningProfileConfirmOK creates a ProvisioningProfileConfirmOK with default headers values
func NewProvisioningProfileConfirmOK() *ProvisioningProfileConfirmOK {
	return &ProvisioningProfileConfirmOK{}
}

/*ProvisioningProfileConfirmOK handles this case with default header values.

OK
*/
type ProvisioningProfileConfirmOK struct {
	Payload *models.V0ProvisionProfileResponseModel
}

func (o *ProvisioningProfileConfirmOK) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded][%d] provisioningProfileConfirmOK  %+v", 200, o.Payload)
}

func (o *ProvisioningProfileConfirmOK) GetPayload() *models.V0ProvisionProfileResponseModel {
	return o.Payload
}

func (o *ProvisioningProfileConfirmOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ProvisionProfileResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileConfirmBadRequest creates a ProvisioningProfileConfirmBadRequest with default headers values
func NewProvisioningProfileConfirmBadRequest() *ProvisioningProfileConfirmBadRequest {
	return &ProvisioningProfileConfirmBadRequest{}
}

/*ProvisioningProfileConfirmBadRequest handles this case with default header values.

Bad Request
*/
type ProvisioningProfileConfirmBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileConfirmBadRequest) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded][%d] provisioningProfileConfirmBadRequest  %+v", 400, o.Payload)
}

func (o *ProvisioningProfileConfirmBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileConfirmBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileConfirmUnauthorized creates a ProvisioningProfileConfirmUnauthorized with default headers values
func NewProvisioningProfileConfirmUnauthorized() *ProvisioningProfileConfirmUnauthorized {
	return &ProvisioningProfileConfirmUnauthorized{}
}

/*ProvisioningProfileConfirmUnauthorized handles this case with default header values.

Unauthorized
*/
type ProvisioningProfileConfirmUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileConfirmUnauthorized) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded][%d] provisioningProfileConfirmUnauthorized  %+v", 401, o.Payload)
}

func (o *ProvisioningProfileConfirmUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileConfirmUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileConfirmNotFound creates a ProvisioningProfileConfirmNotFound with default headers values
func NewProvisioningProfileConfirmNotFound() *ProvisioningProfileConfirmNotFound {
	return &ProvisioningProfileConfirmNotFound{}
}

/*ProvisioningProfileConfirmNotFound handles this case with default header values.

Not Found
*/
type ProvisioningProfileConfirmNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileConfirmNotFound) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded][%d] provisioningProfileConfirmNotFound  %+v", 404, o.Payload)
}

func (o *ProvisioningProfileConfirmNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileConfirmNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileConfirmInternalServerError creates a ProvisioningProfileConfirmInternalServerError with default headers values
func NewProvisioningProfileConfirmInternalServerError() *ProvisioningProfileConfirmInternalServerError {
	return &ProvisioningProfileConfirmInternalServerError{}
}

/*ProvisioningProfileConfirmInternalServerError handles this case with default header values.

Internal Server Error
*/
type ProvisioningProfileConfirmInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileConfirmInternalServerError) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded][%d] provisioningProfileConfirmInternalServerError  %+v", 500, o.Payload)
}

func (o *ProvisioningProfileConfirmInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileConfirmInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
