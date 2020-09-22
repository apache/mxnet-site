

``mx.nd.ones``
============================

Description
----------------------

Generate an mx.ndarray object with ones

**Example**::

	 mat = mx.nd.ones(10)
	 as.array(mat)
	 mat2 = mx.nd.ones(c(5,5))
	 as.array(mat)
	 mat3 = mx.nd.ones(c(3,3,3))
	 as.array(mat3)
	 
Usage
----------

.. code:: r

	mx.nd.ones(shape, ctx = NULL)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``shape``                              | the dimension of the ``mx.ndarray}``                       |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | optional The context device of the array. mx.ctx.default() |
|                                        | will be used in                                            |
|                                        | default.                                                   |
+----------------------------------------+------------------------------------------------------------+



