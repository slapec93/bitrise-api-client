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

// ProvisioningProfileDeleteReader is a Reader for the ProvisioningProfileDelete structure.
type ProvisioningProfileDeleteReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ProvisioningProfileDeleteReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewProvisioningProfileDeleteOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewProvisioningProfileDeleteBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewProvisioningProfileDeleteUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewProvisioningProfileDeleteNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewProvisioningProfileDeleteInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewProvisioningProfileDeleteOK creates a ProvisioningProfileDeleteOK with default headers values
func NewProvisioningProfileDeleteOK() *ProvisioningProfileDeleteOK {
	return &ProvisioningProfileDeleteOK{}
}

/*ProvisioningProfileDeleteOK handles this case with default header values.

OK
*/
type ProvisioningProfileDeleteOK struct {
	Payload *models.V0ProvisionProfileResponseModel
}

func (o *ProvisioningProfileDeleteOK) Error() string {
	return fmt.Sprintf("[DELETE /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileDeleteOK  %+v", 200, o.Payload)
}

func (o *ProvisioningProfileDeleteOK) GetPayload() *models.V0ProvisionProfileResponseModel {
	return o.Payload
}

func (o *ProvisioningProfileDeleteOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ProvisionProfileResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileDeleteBadRequest creates a ProvisioningProfileDeleteBadRequest with default headers values
func NewProvisioningProfileDeleteBadRequest() *ProvisioningProfileDeleteBadRequest {
	return &ProvisioningProfileDeleteBadRequest{}
}

/*ProvisioningProfileDeleteBadRequest handles this case with default header values.

Bad Request
*/
type ProvisioningProfileDeleteBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileDeleteBadRequest) Error() string {
	return fmt.Sprintf("[DELETE /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileDeleteBadRequest  %+v", 400, o.Payload)
}

func (o *ProvisioningProfileDeleteBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileDeleteBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileDeleteUnauthorized creates a ProvisioningProfileDeleteUnauthorized with default headers values
func NewProvisioningProfileDeleteUnauthorized() *ProvisioningProfileDeleteUnauthorized {
	return &ProvisioningProfileDeleteUnauthorized{}
}

/*ProvisioningProfileDeleteUnauthorized handles this case with default header values.

Unauthorized
*/
type ProvisioningProfileDeleteUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileDeleteUnauthorized) Error() string {
	return fmt.Sprintf("[DELETE /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileDeleteUnauthorized  %+v", 401, o.Payload)
}

func (o *ProvisioningProfileDeleteUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileDeleteUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileDeleteNotFound creates a ProvisioningProfileDeleteNotFound with default headers values
func NewProvisioningProfileDeleteNotFound() *ProvisioningProfileDeleteNotFound {
	return &ProvisioningProfileDeleteNotFound{}
}

/*ProvisioningProfileDeleteNotFound handles this case with default header values.

Not Found
*/
type ProvisioningProfileDeleteNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileDeleteNotFound) Error() string {
	return fmt.Sprintf("[DELETE /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileDeleteNotFound  %+v", 404, o.Payload)
}

func (o *ProvisioningProfileDeleteNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileDeleteNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProvisioningProfileDeleteInternalServerError creates a ProvisioningProfileDeleteInternalServerError with default headers values
func NewProvisioningProfileDeleteInternalServerError() *ProvisioningProfileDeleteInternalServerError {
	return &ProvisioningProfileDeleteInternalServerError{}
}

/*ProvisioningProfileDeleteInternalServerError handles this case with default header values.

Internal Server Error
*/
type ProvisioningProfileDeleteInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ProvisioningProfileDeleteInternalServerError) Error() string {
	return fmt.Sprintf("[DELETE /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}][%d] provisioningProfileDeleteInternalServerError  %+v", 500, o.Payload)
}

func (o *ProvisioningProfileDeleteInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ProvisioningProfileDeleteInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
