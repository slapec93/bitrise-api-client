// Code generated by go-swagger; DO NOT EDIT.

package application

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/bitrise-io/bitrise-api-client/models"
)

// AppListReader is a Reader for the AppList structure.
type AppListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *AppListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewAppListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	case 400:
		result := NewAppListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 401:
		result := NewAppListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 404:
		result := NewAppListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 500:
		result := NewAppListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewAppListOK creates a AppListOK with default headers values
func NewAppListOK() *AppListOK {
	return &AppListOK{}
}

/*AppListOK handles this case with default header values.

OK
*/
type AppListOK struct {
	Payload *models.V0AppListResponseModel
}

func (o *AppListOK) Error() string {
	return fmt.Sprintf("[GET /apps][%d] appListOK  %+v", 200, o.Payload)
}

func (o *AppListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0AppListResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListBadRequest creates a AppListBadRequest with default headers values
func NewAppListBadRequest() *AppListBadRequest {
	return &AppListBadRequest{}
}

/*AppListBadRequest handles this case with default header values.

Bad Request
*/
type AppListBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListBadRequest) Error() string {
	return fmt.Sprintf("[GET /apps][%d] appListBadRequest  %+v", 400, o.Payload)
}

func (o *AppListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListUnauthorized creates a AppListUnauthorized with default headers values
func NewAppListUnauthorized() *AppListUnauthorized {
	return &AppListUnauthorized{}
}

/*AppListUnauthorized handles this case with default header values.

Unauthorized
*/
type AppListUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /apps][%d] appListUnauthorized  %+v", 401, o.Payload)
}

func (o *AppListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListNotFound creates a AppListNotFound with default headers values
func NewAppListNotFound() *AppListNotFound {
	return &AppListNotFound{}
}

/*AppListNotFound handles this case with default header values.

Not Found
*/
type AppListNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListNotFound) Error() string {
	return fmt.Sprintf("[GET /apps][%d] appListNotFound  %+v", 404, o.Payload)
}

func (o *AppListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListInternalServerError creates a AppListInternalServerError with default headers values
func NewAppListInternalServerError() *AppListInternalServerError {
	return &AppListInternalServerError{}
}

/*AppListInternalServerError handles this case with default header values.

Internal Server Error
*/
type AppListInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /apps][%d] appListInternalServerError  %+v", 500, o.Payload)
}

func (o *AppListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
