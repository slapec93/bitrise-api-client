// Code generated by go-swagger; DO NOT EDIT.

package generic_project_file

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/bitrise-io/bitrise-api-client/models"
)

// GenericProjectFileShowReader is a Reader for the GenericProjectFileShow structure.
type GenericProjectFileShowReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GenericProjectFileShowReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGenericProjectFileShowOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewGenericProjectFileShowBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewGenericProjectFileShowUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGenericProjectFileShowNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGenericProjectFileShowInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewGenericProjectFileShowOK creates a GenericProjectFileShowOK with default headers values
func NewGenericProjectFileShowOK() *GenericProjectFileShowOK {
	return &GenericProjectFileShowOK{}
}

/*GenericProjectFileShowOK handles this case with default header values.

OK
*/
type GenericProjectFileShowOK struct {
	Payload *models.V0ProjectFileStorageResponseModel
}

func (o *GenericProjectFileShowOK) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/generic-project-files/{generic-project-file-slug}][%d] genericProjectFileShowOK  %+v", 200, o.Payload)
}

func (o *GenericProjectFileShowOK) GetPayload() *models.V0ProjectFileStorageResponseModel {
	return o.Payload
}

func (o *GenericProjectFileShowOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ProjectFileStorageResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFileShowBadRequest creates a GenericProjectFileShowBadRequest with default headers values
func NewGenericProjectFileShowBadRequest() *GenericProjectFileShowBadRequest {
	return &GenericProjectFileShowBadRequest{}
}

/*GenericProjectFileShowBadRequest handles this case with default header values.

Bad Request
*/
type GenericProjectFileShowBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFileShowBadRequest) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/generic-project-files/{generic-project-file-slug}][%d] genericProjectFileShowBadRequest  %+v", 400, o.Payload)
}

func (o *GenericProjectFileShowBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFileShowBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFileShowUnauthorized creates a GenericProjectFileShowUnauthorized with default headers values
func NewGenericProjectFileShowUnauthorized() *GenericProjectFileShowUnauthorized {
	return &GenericProjectFileShowUnauthorized{}
}

/*GenericProjectFileShowUnauthorized handles this case with default header values.

Unauthorized
*/
type GenericProjectFileShowUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFileShowUnauthorized) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/generic-project-files/{generic-project-file-slug}][%d] genericProjectFileShowUnauthorized  %+v", 401, o.Payload)
}

func (o *GenericProjectFileShowUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFileShowUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFileShowNotFound creates a GenericProjectFileShowNotFound with default headers values
func NewGenericProjectFileShowNotFound() *GenericProjectFileShowNotFound {
	return &GenericProjectFileShowNotFound{}
}

/*GenericProjectFileShowNotFound handles this case with default header values.

Not Found
*/
type GenericProjectFileShowNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFileShowNotFound) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/generic-project-files/{generic-project-file-slug}][%d] genericProjectFileShowNotFound  %+v", 404, o.Payload)
}

func (o *GenericProjectFileShowNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFileShowNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFileShowInternalServerError creates a GenericProjectFileShowInternalServerError with default headers values
func NewGenericProjectFileShowInternalServerError() *GenericProjectFileShowInternalServerError {
	return &GenericProjectFileShowInternalServerError{}
}

/*GenericProjectFileShowInternalServerError handles this case with default header values.

Internal Server Error
*/
type GenericProjectFileShowInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFileShowInternalServerError) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/generic-project-files/{generic-project-file-slug}][%d] genericProjectFileShowInternalServerError  %+v", 500, o.Payload)
}

func (o *GenericProjectFileShowInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFileShowInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
