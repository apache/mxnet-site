

``mx.nd.zeros``
==============================

Description
----------------------

Generate an mx.nd.array object with zeros

**Example**::

	 mat = mx.nd.zeros(10)
	 as.array(mat)
	 mat2 = mx.nd.zeros(c(5,5))
	 as.array(mat)
	 mat3 = mx.nd.zeroes(c(3,3,3))
	 as.array(mat3)
	 
Usage
----------

.. code:: r

	mx.nd.zeros(shape, ctx = NULL)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``shape``                              | the dimension of the ``mx.nd.array}``                      |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | optional The context device of the array. mx.ctx.default() |
|                                        | will be used in                                            |
|                                        | default.                                                   |
+----------------------------------------+------------------------------------------------------------+



