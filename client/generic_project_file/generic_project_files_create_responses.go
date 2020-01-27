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

// GenericProjectFilesCreateReader is a Reader for the GenericProjectFilesCreate structure.
type GenericProjectFilesCreateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GenericProjectFilesCreateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 201:
		result := NewGenericProjectFilesCreateCreated()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewGenericProjectFilesCreateBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewGenericProjectFilesCreateUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGenericProjectFilesCreateNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGenericProjectFilesCreateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewGenericProjectFilesCreateCreated creates a GenericProjectFilesCreateCreated with default headers values
func NewGenericProjectFilesCreateCreated() *GenericProjectFilesCreateCreated {
	return &GenericProjectFilesCreateCreated{}
}

/*GenericProjectFilesCreateCreated handles this case with default header values.

Created
*/
type GenericProjectFilesCreateCreated struct {
	Payload *models.V0ProjectFileStorageResponseModel
}

func (o *GenericProjectFilesCreateCreated) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/generic-project-files][%d] genericProjectFilesCreateCreated  %+v", 201, o.Payload)
}

func (o *GenericProjectFilesCreateCreated) GetPayload() *models.V0ProjectFileStorageResponseModel {
	return o.Payload
}

func (o *GenericProjectFilesCreateCreated) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ProjectFileStorageResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFilesCreateBadRequest creates a GenericProjectFilesCreateBadRequest with default headers values
func NewGenericProjectFilesCreateBadRequest() *GenericProjectFilesCreateBadRequest {
	return &GenericProjectFilesCreateBadRequest{}
}

/*GenericProjectFilesCreateBadRequest handles this case with default header values.

Bad Request
*/
type GenericProjectFilesCreateBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFilesCreateBadRequest) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/generic-project-files][%d] genericProjectFilesCreateBadRequest  %+v", 400, o.Payload)
}

func (o *GenericProjectFilesCreateBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFilesCreateBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFilesCreateUnauthorized creates a GenericProjectFilesCreateUnauthorized with default headers values
func NewGenericProjectFilesCreateUnauthorized() *GenericProjectFilesCreateUnauthorized {
	return &GenericProjectFilesCreateUnauthorized{}
}

/*GenericProjectFilesCreateUnauthorized handles this case with default header values.

Unauthorized
*/
type GenericProjectFilesCreateUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFilesCreateUnauthorized) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/generic-project-files][%d] genericProjectFilesCreateUnauthorized  %+v", 401, o.Payload)
}

func (o *GenericProjectFilesCreateUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFilesCreateUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFilesCreateNotFound creates a GenericProjectFilesCreateNotFound with default headers values
func NewGenericProjectFilesCreateNotFound() *GenericProjectFilesCreateNotFound {
	return &GenericProjectFilesCreateNotFound{}
}

/*GenericProjectFilesCreateNotFound handles this case with default header values.

Not Found
*/
type GenericProjectFilesCreateNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFilesCreateNotFound) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/generic-project-files][%d] genericProjectFilesCreateNotFound  %+v", 404, o.Payload)
}

func (o *GenericProjectFilesCreateNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFilesCreateNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGenericProjectFilesCreateInternalServerError creates a GenericProjectFilesCreateInternalServerError with default headers values
func NewGenericProjectFilesCreateInternalServerError() *GenericProjectFilesCreateInternalServerError {
	return &GenericProjectFilesCreateInternalServerError{}
}

/*GenericProjectFilesCreateInternalServerError handles this case with default header values.

Internal Server Error
*/
type GenericProjectFilesCreateInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *GenericProjectFilesCreateInternalServerError) Error() string {
	return fmt.Sprintf("[POST /apps/{app-slug}/generic-project-files][%d] genericProjectFilesCreateInternalServerError  %+v", 500, o.Payload)
}

func (o *GenericProjectFilesCreateInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *GenericProjectFilesCreateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
