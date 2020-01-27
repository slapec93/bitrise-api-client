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

// ProvisioningProfileShowReader is a Reader for the ProvisioningProfileShow structure.
type ProvisioningProfileShowReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ProvisioningProfileShowReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewProvisioningProfileShowOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewProvisioningProfileShowBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewProvisioningProfileShowUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewProvisioningProfileShowNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewProvisioningProfileShowInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewProvisioningProfileShowOK creates a ProvisioningProfileShowOK with default headers values
func NewProvisioningProfileShowOK() *ProvisioningProfileShowOK {
	return &ProvisioningProfileShowOK{}
}

/*ProvisioningProfileShowOK handles this case with default header values.

OK
*/
type ProvisioningProfileShowOK struct {
	Payload *models.V0ProvisionProfileResponseModel
}

func (o *ProvisioningProfileShowOK) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileShowOK  %+v", 200, o.Payload)
}

func (o *ProvisioningProfileShowOK) GetPayload() *models.V0ProvisionProfileResponseModel {
	return o.Payload
}

func (o *ProvisioningProfileShowOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ProvisionProfileResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileShowBadRequest creates a ProvisioningProfileShowBadRequest with default headers values
func NewProvisioningProfileShowBadRequest() *ProvisioningProfileShowBadRequest {
	return &ProvisioningProfileShowBadRequest{}
}

/*ProvisioningProfileShowBadRequest handles this case with default header values.

Bad Request
*/
type ProvisioningProfileShowBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileShowBadRequest) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileShowBadRequest  %+v", 400, o.Payload)
}

func (o *ProvisioningProfileShowBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileShowBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileShowUnauthorized creates a ProvisioningProfileShowUnauthorized with default headers values
func NewProvisioningProfileShowUnauthorized() *ProvisioningProfileShowUnauthorized {
	return &ProvisioningProfileShowUnauthorized{}
}

/*ProvisioningProfileShowUnauthorized handles this case with default header values.

Unauthorized
*/
type ProvisioningProfileShowUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileShowUnauthorized) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileShowUnauthorized  %+v", 401, o.Payload)
}

func (o *ProvisioningProfileShowUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileShowUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileShowNotFound creates a ProvisioningProfileShowNotFound with default headers values
func NewProvisioningProfileShowNotFound() *ProvisioningProfileShowNotFound {
	return &ProvisioningProfileShowNotFound{}
}

/*ProvisioningProfileShowNotFound handles this case with default header values.

Not Found
*/
type ProvisioningProfileShowNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileShowNotFound) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileShowNotFound  %+v", 404, o.Payload)
}

func (o *ProvisioningProfileShowNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileShowNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileShowInternalServerError creates a ProvisioningProfileShowInternalServerError with default headers values
func NewProvisioningProfileShowInternalServerError() *ProvisioningProfileShowInternalServerError {
	return &ProvisioningProfileShowInternalServerError{}
}

/*ProvisioningProfileShowInternalServerError handles this case with default header values.

Internal Server Error
*/
type ProvisioningProfileShowInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileShowInternalServerError) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileShowInternalServerError  %+v", 500, o.Payload)
}

func (o *ProvisioningProfileShowInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileShowInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
