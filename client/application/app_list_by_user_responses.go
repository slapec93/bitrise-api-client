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

// AppListByUserReader is a Reader for the AppListByUser structure.
type AppListByUserReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *AppListByUserReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewAppListByUserOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	case 400:
		result := NewAppListByUserBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 401:
		result := NewAppListByUserUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 404:
		result := NewAppListByUserNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 500:
		result := NewAppListByUserInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewAppListByUserOK creates a AppListByUserOK with default headers values
func NewAppListByUserOK() *AppListByUserOK {
	return &AppListByUserOK{}
}

/*AppListByUserOK handles this case with default header values.

OK
*/
type AppListByUserOK struct {
	Payload *models.V0AppListResponseModel
}

func (o *AppListByUserOK) Error() string {
	return fmt.Sprintf("[GET /users/{user-slug}/apps][%d] appListByUserOK  %+v", 200, o.Payload)
}

func (o *AppListByUserOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0AppListResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByUserBadRequest creates a AppListByUserBadRequest with default headers values
func NewAppListByUserBadRequest() *AppListByUserBadRequest {
	return &AppListByUserBadRequest{}
}

/*AppListByUserBadRequest handles this case with default header values.

Bad Request
*/
type AppListByUserBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByUserBadRequest) Error() string {
	return fmt.Sprintf("[GET /users/{user-slug}/apps][%d] appListByUserBadRequest  %+v", 400, o.Payload)
}

func (o *AppListByUserBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByUserUnauthorized creates a AppListByUserUnauthorized with default headers values
func NewAppListByUserUnauthorized() *AppListByUserUnauthorized {
	return &AppListByUserUnauthorized{}
}

/*AppListByUserUnauthorized handles this case with default header values.

Unauthorized
*/
type AppListByUserUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByUserUnauthorized) Error() string {
	return fmt.Sprintf("[GET /users/{user-slug}/apps][%d] appListByUserUnauthorized  %+v", 401, o.Payload)
}

func (o *AppListByUserUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByUserNotFound creates a AppListByUserNotFound with default headers values
func NewAppListByUserNotFound() *AppListByUserNotFound {
	return &AppListByUserNotFound{}
}

/*AppListByUserNotFound handles this case with default header values.

Not Found
*/
type AppListByUserNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByUserNotFound) Error() string {
	return fmt.Sprintf("[GET /users/{user-slug}/apps][%d] appListByUserNotFound  %+v", 404, o.Payload)
}

func (o *AppListByUserNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByUserInternalServerError creates a AppListByUserInternalServerError with default headers values
func NewAppListByUserInternalServerError() *AppListByUserInternalServerError {
	return &AppListByUserInternalServerError{}
}

/*AppListByUserInternalServerError handles this case with default header values.

Internal Server Error
*/
type AppListByUserInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByUserInternalServerError) Error() string {
	return fmt.Sprintf("[GET /users/{user-slug}/apps][%d] appListByUserInternalServerError  %+v", 500, o.Payload)
}

func (o *AppListByUserInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
