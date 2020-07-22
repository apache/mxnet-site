

``mx.nd.array``
==============================

Description
----------------------

Create a new ``mx.ndarray`` that copies the content from src on ctx.

**Example**::

	 mat = mx.nd.array(x)
	 mat = 1 - mat + (2 * mat)/(mat + 0.5)
	 as.array(mat)
	 
Usage
----------

.. code:: r

	mx.nd.array(src.array, ctx = NULL)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``src.array``                          | Source array data of class ``array``, ``vector`` or        |
|                                        | ``matrix``.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | optional The context device of the array. mx.ctx.default() |
|                                        | will be used in                                            |
|                                        | default.                                                   |
+----------------------------------------+------------------------------------------------------------+

Value
----------

An ``mx.ndarray``

An Rcpp_MXNDArray object


